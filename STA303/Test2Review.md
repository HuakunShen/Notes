# Test 2

## Tips

1. Always say **"average"** when interpreting a numeric value, probably related to Confidence Interval.
2. $\beta_0$ (intercept) 代表所有x都为0的那一组
3. CI和p-value是类似的。CI 整体大于0说明positive effect, 小于0说明negative effect.
4. 看和random level有关的variable的confidence interval时，LMM比LM更宽。
5. 看2个random effect variance/standard deviation的CI时，variance 大说明，好的特别好，坏的特别坏。极端。
6. 看random effect plot时，more skew说明more variance。

必考：

1. 给的数据可能有什么问题？

   y is not independent, use mixed effect model

2. Difference between GLMM and LMM?

   Generalized if y is not normal

3. Difference between LMM and LM?

   Mixed: 解释了y之间的correlation

4. LMM和LM的CI的关系？

   LMM相当于sample size更小（有correlation），所以和group有关的variable在LMM中的CI更宽。More Sample => more accurate => smaller CI => LM has smaller CI

5. 如何看图说明random intercept有效果？

   至少有2个CI没有重叠部分。如果所有的intercept的CI都重叠，那么加入random intercept 没有意义。

6. LMM Model需要描述什么？

   - 每个$\beta$的CI（contain 0, above 0, or below 0）
   - $\frac{\sigma^2}{\sigma^2+\tau^2}$：random effect解释了多少的error

7. Between和Within的model怎么写？

   $$Y_{ijk}\sim Bernoulli(\rho_{ijk})$$

   $$logit(\rho_{ijk})=\mu+X_{ij}\beta+U_i+Z_{ij}$$

   $$U_i\sim N(0,\sigma^2_U)$$

   $$Z_ij\sim N(0,\sigma^2_Z)$$

   

   比如:
   有 state 和 school
   不同的 state 的 variance: 就是 between
   然后在同一个 state 的不同的 school 的 variance: 就是 within

8. Case Control

   Case: 有事的，有病的，y=1

   Control: 没事的，没病的，y=0

9. Case Control Assumption

   Z is independent of X given Y.

   Z represents either a subject is selected or not, dummy, 0/1.

   

























