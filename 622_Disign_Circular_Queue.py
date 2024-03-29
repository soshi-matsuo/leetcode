class MyCircularQueue:

    def __init__(self, k: int):
        """
        Initialize your data structure here. Set the size of the queue to be k.
        """
        self.data = [None] * k
        self.head = -1
        self.tail = -1
        self.size = k
        

    def enQueue(self, value: int) -> bool:
        """
        Insert an element into the circular queue. Return true if the operation is successful.
        """
        if self.isFull():
            return False
        
        if self.head == -1:
            self.head = 0
        
        self.tail = (self.tail + 1) % self.size
        self.data[self.tail] = value
        return True

    
    def deQueue(self) -> bool:
        """
        Delete an element from the circular queue. Return true if the operation is successful.
        """
        if self.isEmpty():
            return False
        
        self.data[self.head] = None
        
        if self.head == self.tail:
            self.head, self.tail = -1, -1
        else:
            self.head = (self.head + 1) % self.size
        
        return True
        

    def Front(self) -> int:
        """
        Get the front item from the queue.
        """
        if self.head != -1:
            return self.data[self.head]
        return -1
        

    def Rear(self) -> int:
        """
        Get the last item from the queue.
        """
        if self.tail != -1:
            return self.data[self.tail]
        return -1
        

    def isEmpty(self) -> bool:
        """
        Checks whether the circular queue is empty or not.
        """
        if self.head == -1 and self.tail == -1:
            return True
        return False
        

    def isFull(self) -> bool:
        """
        Checks whether the circular queue is full or not.
        """
        if (self.tail + 1) % self.size == self.head:
            return True
        return False
        


# Your MyCircularQueue object will be instantiated and called as such:
# obj = MyCircularQueue(k)
# param_1 = obj.enQueue(value)
# param_2 = obj.deQueue()
# param_3 = obj.Front()
# param_4 = obj.Rear()
# param_5 = obj.isEmpty()
# param_6 = obj.isFull()
