/** 

# A data structure that provides relational information about nodes.

- Can be directed or undirected connections between nodes.
- Information can be stored in the relations which would make it weighted.
- Nodes can also relate to themselves using cyclic relations.

- A graph can be represented two ways. In a matrix or adjacency list.

A matrix stores its nodes on the 0th row and column of the matrix using 
a 1 as a connection point between them. This is less memory efficient than 
an adjacency list.

An adjacency list uses objects to represent connections. Each item would have
its own array of connections. 

I will use airport connections for my demos.
*/
