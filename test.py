import re
from scipy.spatial import ConvexHull
import pandas as pd

def find_nodes(file_path):
    with open(file_path, 'r') as file:
        content = file.readlines()

    node_data = []
    capture = False
    for line in content:
        if line.startswith('*NODE'):
            capture = True
            continue
        if capture and line.startswith('*'):
            break
        if capture:
            node_data.append(line.strip())

    nodes = []
    for line in node_data:
        parts = re.split(r'\s+', line.strip())
        if len(parts) >= 4:
            node_id = int(parts[0])
            x, y, z = map(float, parts[1:4])
            nodes.append([node_id, x, y, z])


    node_df = pd.DataFrame(nodes, columns=['Node ID', 'X', 'Y', 'Z'])
    hull = ConvexHull(node_df[['X', 'Y', 'Z']].values)
    result = node_df.iloc[hull.vertices]
    return result.sort_values(by='Node ID').head(8)


file_path = r"C:\Users\xtcse\Downloads\TestModel.k"
result = find_nodes(file_path)
print(result)