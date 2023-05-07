const numbers: [number, number, number] = [1, 2, 3];

type resStatusCode = [number, string];
const resOK: resStatusCode = [200, 'OK'];
const resError: resStatusCode = [404, 'Not Found'];
// limitation of tuples is that we can push into it without issue
resError.push('rubbish');
console.log(resError);

enum OrderStatus {
  PENDING,
  SHIPPING,
  DELIVERED,
  RETURNED,
}

let deliveryStatus = OrderStatus.SHIPPING;
const updateToDelivered = (status: OrderStatus): OrderStatus =>
  status !== OrderStatus.DELIVERED ? OrderStatus.DELIVERED : status;

console.log(deliveryStatus);
deliveryStatus = updateToDelivered(deliveryStatus);
console.log(deliveryStatus);

/*
- Regular `enums` are compiled into JavaScript objects, which means they will generate some additional runtime code.
- They can be used for reverse mapping, meaning you can get both the name and the value from the enumeration.
- The values of the enumeration can be computed at runtime.

- `const enums` are completely removed during the compilation process and replaced with their constant values.
- This results in more efficient and smaller generated code since no additional JavaScript objects are created.
- They cannot be used for reverse mapping.
- The values of the enumeration must be constant and cannot be computed at runtime.

- In summary, if you need a more efficient and compact code with no runtime overhead, you can use `const enum`.
- However, if you need the flexibility of runtime computation or reverse mapping, you should use a regular `enum`.
*/

const enum ArrowKeys {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}
