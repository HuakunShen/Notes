# Decision Tree

https://www.youtube.com/watch?v=7VeUPuFGJHk

In a decision tree, internal nodes are questions with binary answers (yes/no), then based on the answer, split into two branches. Continue asking questions, until reaching a leave, a leave node is a decision.

How to decide which questions to ask and which one to ask prior to another?

- Information Gain
- Gini Impurity

What if we don't have yes/no questions? Instead, we have to make decisions based on numeric data.

1. Sort by numeric value

2. Calculate the average value for all adjacent values

   [1, 3, 6, 10] gives [1.5, 4.5, 8]

3. Calculate the impurity values/info gain for each averaged value

# Random Forest

https://www.youtube.com/watch?v=J4Wdy0Wc_xQ

Decision trees are not great in practice. They work well with training data, but not new samples, i.e. less generality, low accuracy

Random Forests combine the simplicity of decision trees with flexibility resulting in a vast improvement in accuracy.

1. Create a bootstrap of dataset (randomly choose some data)
2. Create a decision tree using the bootstrapped dataset, but only use a random subset of variables (or columns) at each step.



















