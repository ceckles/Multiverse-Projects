let {Node, LinkedList} = require('./index');

describe("Linked List data structure", () => {
	let ll;

	beforeEach(() => {
		ll = new LinkedList()
	})

	describe("Node data structure", () => {
		let node = new Node('banana')

		it('has a value', () => {
			expect(node.value).toBe("banana");
		});

		it('has a property of previous, set to null', () => {
			expect(node.previous).toBe(null)
		});

		it('has a property of next, set to null', () => {
			expect(node.next).toBe(null)
		});
	});

	describe("Linked Lists implementation" , () => {

		it('should have a head property, set to null', () => {
			expect(ll.head).toBe(null);
		});

		it('should have a tail property, set to null', () => {
			expect(ll.tail).toBe(null);
		});

		describe('addToTail method', () => {

			it("has a addToTail method", () => {
				expect(typeof ll.addToTail).toBe('function');
			});

			it("adds a node to tail of linked list", () => {
				let newNode = new Node('apple')
				ll.addToTail(newNode)

				expect(ll.tail instanceof Node ).toBe(true);
				expect(ll.tail.value).toBe('apple');
			});

			it("can add multiple nodes to tail without overwriting previous nodes", () => {
				let banana = new Node('banana');
				let apple = new Node('apple');
				let mango = new Node('mango');

				ll.addToTail(banana);
				ll.addToTail(apple);
				ll.addToTail(mango);

				expect(ll.tail.value).toBe('mango');
				expect(ll.tail.previous.value).toBe('apple');
			});

			it('if a linked list is created with only one node, that node is both the Head and Tail', () => {
				let banana = new Node("banana");
				ll.addToTail(banana);

				expect(ll.tail.value).toBe('banana');
				expect(ll.head.value).toBe('banana');
			})


		});

		describe('addToHead method', () => {
			
			it('has addToHead method', () => {
				expect(typeof ll.addToHead).toBe('function');
			})
			
			it('should use `Node` class to add nodes', () => {
				let banana = new Node('banana')
				ll.addToHead(banana)
				expect(ll.head instanceof Node).toBe(true)
			})

		    it('should be able to add to head without removing or overwriting existing nodes', () => {
		        let banana = new Node('banana');
		        let mango = new Node('mango');

		        ll.addToHead(banana);
		        expect(ll.head.value).toBe('banana')

		        ll.addToHead(mango)
		        expect(ll.head.value).toBe('mango')
		      	expect(ll.head.next.value).toBe('banana')
		    })

		    it('if the linked list consists of a single node after adding to head, that node should be both the head and the tail', () => {
		        let apple = new Node('apple');
		        ll.addToHead(apple);

		        expect(ll.head.value).toBe('apple')
		        expect(ll.tail.value).toBe('apple')
		    });
		});

		describe('removeTail method', () => {

			it('has a removeTail method', () => {
				expect(typeof ll.removeTail).toBe('function');
			})
			
			it('should return the `value` of the removed tail node', () => {
				let banana = new Node('banana');
		        let mango = new Node('mango');

				ll.addToTail(banana)
				ll.addToTail(mango)

				expect(ll.removeTail().value).toBe('mango')
				expect(ll.removeTail().value).toBe('banana')
			})

			it('should reassign the `tail` after the current tail node is removed', () => {
				let banana = new Node('banana');
		        let mango = new Node('mango');
		        let apple = new Node('apple');

				ll.addToTail(banana)
				ll.addToTail(mango)
				ll.addToTail(apple)

				ll.removeTail() // remove apple
				expect(ll.tail.value).toBe('mango')

				ll.removeTail() // remove mango
				expect(ll.tail.value).toBe('banana')
			})

			it('should make sure the `next` of any tail is null', () => {
				let banana = new Node('banana');
				let mango = new Node('mango');
		        let apple = new Node('apple');

				ll.addToTail(banana)
				ll.addToTail(mango)
				ll.addToTail(apple)

				ll.removeTail()
				expect(ll.tail.value).toBe('mango')
				expect(ll.tail.next).toBe(null)

				ll.removeTail()
				expect(ll.tail.value).toBe('banana')
				expect(ll.tail.next).toBe(null)
			})

			it('returns null if there is no tail to remove (ie: the list is empty, or all nodes have been removed)', () => {
				expect(ll.removeTail()).toBe(null)

				let banana = new Node('banana');
				let mango = new Node('mango');
		        let apple = new Node('apple');

				ll.addToTail(banana)
				ll.addToTail(mango)
				ll.addToTail(apple)

				ll.removeTail()
				ll.removeTail()
				ll.removeTail()
				
				expect(ll.removeTail()).toBe(null)
			})
		});


		/*
			Bonus, can you test and implement any of the following:
			
			removeHead
			findNodeByIndex
			removeNodeByValue **challenge**
		*/
	})
})