import orderByDesc from '../orderByDesc';

const tempArr = [
  { "name": "gron Kabashi", "email": "nteba.xnonfuv@gerggba82.pbz", },
  { "name": "bulle Bazzara", "email": "nuzrq.onmmnen@gerggba82.pbz", },
  { "name": "Alban Nurkollari", "email": "nyona.ahexbyynev@gerggba82.pbz", }];

const expectArr = [
  { "name": "gron Kabashi", "email": "nteba.xnonfuv@gerggba82.pbz", },
  { "name": "bulle Bazzara", "email": "nuzrq.onmmnen@gerggba82.pbz", },
  { "name": "Alban Nurkollari", "email": "nyona.ahexbyynev@gerggba82.pbz", }];

  // see if my sorting func is correctly sorting its array to a-z by comparing an already sorted
  // a-z array to an unsorted array that goes through my sorting function
test('desc', () => {
  expect(tempArr.sort(orderByDesc)).toEqual(expectArr);
});