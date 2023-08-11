import SingleLinkedList from './singleLinkedList';

describe('singleLinkedList', () => {
  let list = new SingleLinkedList();
  list.push(1);
  list.push(2);
  list.push(3);
  list.push(4);
  list.push(5);

  test('List [1, 2, 3, 4, 5]: head > 1', () => {
    expect(list.start()).toEqual(1);
  });

  test('List [1, 2, 3, 4, 5]: tail > 5', () => {
    expect(list.end()).toEqual(5);
  });

  test('List [1, 2, 3, 4, 5]: push > 6', () => {
    list.push(6);
    expect(list.end()).toEqual(6);
  });

  test('List [1, 2, 3, 4, 5, 6]: New tail > 6', () => {
    expect(list.end()).toEqual(6);
  });

  test('List [1, 2, 3, 4, 5]: pop()', () => {
    list.pop(6);
    expect(list.pop()).toEqual(6);
  });
});
