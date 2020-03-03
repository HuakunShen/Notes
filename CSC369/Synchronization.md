# Synchronization

## Semaphore (信号标)

Semaphore value represents the number of threads that can pass through wait before it blocks.

```{c}
Wait(Sem) {
    while (Sem <= 0);
    Sem--;
}

Signal(Sem) {
    Sem++;
}
```

### Types of Semaphores

#### Mutex (or binary) Semaphore (count = 0/1)

- Single access to a resource
- Mutual exclusion to a critical section

如果有多个thread想改同一个resource，只有一个可以进如critical section，critical section处于`wait`和`signal`之间。

<img src="Synchronization.assets/image-20200302225009444.png" alt="image-20200302225009444" style="zoom: 33%;" />

Initial Semaphore S = 1, 也就是说，只有一个thread can pass through wait before it blocks.

当第一个thread call `wait` 之后，$S=0$, 第一个thread会继续往下跑，进入critical section。而在第一个thread call 完`wait`之后但是`signal`还没有被call的时候，如果任何其他的thread call `Withdraw`, 和`wait`, 由于$S=0$, 这些thread都会被while loop block。这个过程中S一直是0，因为只有while loop结束了，S才会-1。

当第一个thread运行完并且call了`signal`之后，S恢复成1。此时，如果有任何其他的thread想运行`Withdraw`, 那么他们都会在`wait`中被block住，`Signal`后轮到某一个thread，因为$S=1$, while loop结束，`S--`变成0，这个thread将会继续向下运行并重复之前描述的第一个thread进行的工作，此时$S=0$, 任何其他thread都会被继续block，等待下一次signal。

#### A binary semaphore (with initial value 1) can be used just like a lock

Then what's the difference? Why bother with both abstractions? 

- Semantic difference – logically, a lock has an “owner” and can only be released by its owner 
- Permits some error checking 
- Helps reason about the correct behaviour 

#### Counting semaphore 

- A resource with many units available, or a resource that allows certain kinds of unsynchronized concurrent access (e.g., reading)
- Multiple threads can pass the semaphore
- Max number of threads is determined by semaphore’s initial value, count
  - Mutex has count = 1, counting has count = N

### Rendezvous Problem

<img src="Synchronization.assets/image-20200303023925083.png" alt="image-20200303023925083" style="zoom: 33%;" />

a1 happens before b2: `wait(semB)` waits until a1 is executed and then `signal(semB)` 

b1 happens before a2: `wait(semA)` waits until b1 is executed and then `signal(semA)`

### Producer/Consumer

<img src="Synchronization.assets/image-20200303024327025.png" alt="image-20200303024327025" style="zoom: 50%;" />

$full = N$ means that the buffer has a size of N. If every producer add 1 char to buffer, as buffer is full, `sem_wait(full)` will block producer from adding to buffer ($full=0$), until consumer consumes some buffer ($full>0$).

$empty=0$ means that the buffer is initially empty, and consumer has to wait (`sem_wait(empty)`) if the buffer is empty. As Producer execute `sem_signal(empty)`, `empty` gets incremented, and Consumer can escape from blocking. As consumer escapes `sem_wait(empty)`, empty gets decremented again, indicating that 1 unit in buffer is consumed and if $empty=0$, no other consumers can consume (will be blocked). 

`mutex` is used to prevent some producer and consumer from accessing the buffer at the same time. Although the mutex region is different for producer and consumer, they share the same resource, buffer. 

$mutex=1$ means that only one thread can access the region guarded by `mutex`. As `sem_wait(mutex)` is called, if `mutex=1`, then no thread is reading or writing, and can continue to read or write. Before the thread signals, mutex will be always 0, blocking any other read or write (producer or consumer).



### Reader/Writer with Semaphores

<img src="Synchronization.assets/image-20200303025649935.png" alt="image-20200303025649935" style="zoom:50%;" />

`w_or_r` is used to prevent Writer and Reader from reading and writing at the same time. They guards `Write` and `Read` respectively in the code. 

`mutex` is only for Reader, preventing multiple Readers from modifying `readcount` at the same time.

`readcount` is not a semaphore. Its function is to keep track of the number of reader thread at the same time. As `readcount` turns to 1 from 0, that means it's some reader thread's turn to read, and `sem_wait(w_or_r)` to block any writer thread. But if `readcount > 0`, that means some reader thread is already reading, and `w_or_r` is already set to 0, any writer thread is blocked, but new reader thread can still proceed, as reading the same resource can be shared between many reader threads.



## Deadlock (僵局)

### Defining deadlock

<img src="Synchronization.assets/image-20200303030826351.png" alt="image-20200303030826351" style="zoom:25%;" />

### Resource Deadlocks

- We will focus on recource deadlocks
- Root cuases:
  - Recources are finite (比如路只有一条)
  - Processes wait if a recource they need is unavailable
  - Resources may be held by other waiting processes

#### What is a resource?

- Any object that might be needed by a process to do its work
- Hardware: printers, memory, processors, disk drive
- Data: Shared variables, record in a database, files
- Synchronization objects (or equivalently, the critical regions they protect)
  - Locks, semaphores, monitors
- We are concerned with reusable resources
  - Can be used by one process at a time, released

### Conditions for deadlock to occur

1. **Mutual Exclusion**

   Only one process may use a resource at a time

2. **Hold and Wait**

   A process may hold allocated resources while awaiting assignment of others

3. **No preemption (抢先占有)**

   No resource can be forcibly removed from a process holding it

4. Circular Wait

   A closed chain of processes exists, such that each process holds at least one resource needed by the next process in the chain

Together, these four conditions are necessary and sufficient for deadlock.

Circular wait implies hold and wait, but the former results from a sequence of events, while the latter is a policy decision.

<img src="Synchronization.assets/image-20200303032404042.png" alt="image-20200303032404042" style="zoom: 33%;" />

### How to deal with deadlocks

> Break one of the four conditions and deadlock cannot occur















