# Lec 8 Attention

## Motivation

RNN的计算是顺序的，从左到右或从右到左一次计算。

### Problem:

1. Calculating at time $t$ requires result from time $t-1$, 这样限制了模型的并行能力
2. **Long Sequence** not handled well. 顺序计算的过程中信息会丢失，尽管LSTM等门机制的结构一定程度上缓解了长期依赖的问题，但是对于特别长期的依赖现象,LSTM依旧无能为力。

Transformer的提出解决了上面两个问题，首先它使用了Attention机制，将序列中的任意两个位置之间的距离是缩小为一个常量。其次它不是类似RNN的顺序结构，因此具有更好的并行性，符合现有的GPU框架。



## Lecture Notes

The model has both an encoder and a decoder.

**Encoder:** Computes an **annotation** of each word in the input with bidirectional RNN. Forward and Backward RNN concatenate their hidden vectors.

<img src="Lec 8 Attention.assets/image-20200315173620465.png" alt="image-20200315173620465" style="zoom:33%;" />

**Decoder:** Also a RNN network. Making predictions one word at a time, each output word is fed back in as inputs.

<img src="Lec 8 Attention.assets/image-20200315175319344.png" alt="image-20200315175319344" style="zoom: 33%;" />

<img src="Lec 8 Attention.assets/image-20200315183926115.png" alt="image-20200315183926115" style="zoom:25%;" />

<img src="Lec 8 Attention.assets/image-20200315183926115.png" alt="image-20200315183926115" style="zoom:33%;" />

Ama 