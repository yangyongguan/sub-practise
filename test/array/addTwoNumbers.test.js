import addTwoNumbers from '../../code/array/addTwoNumbers'

test('test--addTwoNumbers: ', () => {
  function ListNode (val) {
    this.val = val
    this.next = null
  }
  let a = new ListNode(2)
  a.next = new ListNode(4)
  a.next.next = new ListNode(3)

  let b = new ListNode(5)
  a.next = new ListNode(6)
  a.next.next = new ListNode(4)

  let result = new ListNode(7)
  a.next = new ListNode(0)
  a.next.next = new ListNode(8)

  expect(addTwoNumbers(a, b)).toBe(result)
})
