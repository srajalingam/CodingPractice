var preorderTraversal = function(root) {
    const result = [];

    function traverse(node) {
        if (node === null) {
            return;
        }

        // 1. Visit the root
        result.push(node.val);

        // 2. Traverse the left subtree
        traverse(node.left);

        // 3. Traverse the right subtree
        traverse(node.right);
    }

    traverse(root);

    return result;
};
