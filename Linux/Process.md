# Process

```bash
htop	# watch process ongoing
```

<img src="/home/huakun/.config/Typora/typora-user-images/image-20200328020004157.png" alt="image-20200328020004157" style="zoom:50%;" />

```bash
kill -signal_name process_id # sends a specific signal to a process
sudo pkill -u user	# kill a users processes

```

```bash
sudo renice -5 2744	# niceness/priority is in [-20, 19], followed by the process id
# -20 means most important, highest priority
```

Nice value range (NI): -20 to 19

```
PR = 20 + NI
PR = 20 + (-20 to + 19)
PR = 20 + -20  to 20 + 19
PR = 0 to 39 which is same as 100 to 139.
```



























