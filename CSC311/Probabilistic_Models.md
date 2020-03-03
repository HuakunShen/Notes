# Probabilistic Models

Two approaches to classification:

- Discriminative approach: estimate parameters of decision boundary/class separator directly from labeled examples.

  - Tries to solve: How do I separate the classes?
  - learn $p(t|x)$ directly (logistic regression models)
  - learn mappings from inputs to classes (linear/logistic regression, decision trees etc)

- Generative approach: model the distribution of inputs characteristic of the class (Bayes classifier).
  - Tries to solve: What does each class "look" like?
  - Build a model of $p(x|t)$
  - Apply Bayes Rule

