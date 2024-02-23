class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
def copy_tree(root):
    if root is None:
        return None

    new_node = TreeNode(root.value)  # Create a new node with the same value as the current node

    # Recursively copy left and right subtrees
    new_node.left = copy_tree(root.left)
    new_node.right = copy_tree(root.right)
    return new_node

# Function to print the tree using pre-order traversal
def print_tree_preorder(root):
    if root:
        print(root.value, end=" ")
        print_tree_preorder(root.left)
        print_tree_preorder(root.right)

# Example usage:
# Creating a binary tree
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.right.left = TreeNode(4)
root.right.right = TreeNode(5)

# Copying the binary tree
copied_root = copy_tree(root)

# Printing original and copied trees to verify
print("Original tree (pre-order):")
print_tree_preorder(root)
print("\nCopied tree (pre-order):")
print_tree_preorder(copied_root)



