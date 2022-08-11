import PersianDate from '@alireza-ab/persian-date';

export default function (
  ...args: ConstructorParameters<typeof PersianDate>
): PersianDate {
  return new PersianDate(...args);
}
