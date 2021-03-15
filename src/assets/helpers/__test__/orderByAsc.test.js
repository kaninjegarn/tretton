import orderByAsc from '../orderByAsc';

const tempArr = [
  { "name": "gron Kabashi","email": "nteba.xnonfuv@gerggba82.pbz",},
  { "name": "bulle Bazzara", "email": "nuzrq.onmmnen@gerggba82.pbz",}, 
  { "name": "Alban Nurkollari","email": "nyona.ahexbyynev@gerggba82.pbz",}];

const expectArr = [
  { "name": "Alban Nurkollari", "email": "nyona.ahexbyynev@gerggba82.pbz", },
  { "name": "bulle Bazzara", "email": "nuzrq.onmmnen@gerggba82.pbz", },
  { "name": "gron Kabashi", "email": "nteba.xnonfuv@gerggba82.pbz", }];

test('asc', () => {
  expect(tempArr.sort(orderByAsc)).toEqual(expectArr.sort(orderByAsc));
});