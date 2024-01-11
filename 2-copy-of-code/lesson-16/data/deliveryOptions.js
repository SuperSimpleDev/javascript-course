export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
}, {
  id: '2',
  deliveryDays: 3,
  priceCents: 499
}, {
  id: '3',
  deliveryDays: 1,
  priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });

  // Note: || deliveryOptions[0] is not in the video,
  // but in case the cart saved in your localStorage
  // does not have deliveryOptionIds, this code will
  // return the first deliveryOption by default. This
  // avoids errors caused by missing deliveryOptionIds.
  // I will add this code to the video in the future.
  return deliveryOption || deliveryOptions[0];
}