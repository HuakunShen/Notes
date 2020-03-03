# Disk

## Secondary Storage

Large, persistent, but slow.

High-level disk characteristics yield two goals:

1. Closeness

   reduce seek times by putting related things close to one another

   generally, benefits can be in the factor of 2 range

2. Amortization

   amortize each positioning delay by grabbing lots of useful data

   generally, benefits can reach into the factor of 10 range

## Relate to File System

Inodes: Indirection & Independence

- File size grows dynamically, allocations are independent

- Hard to achieve closeness and amortization

