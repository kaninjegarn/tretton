import getPages from '../getPages';

const tempArr = [
  { "name": "gron Kabashi", "email": "nteba.xnonfuv@gerggba82.pbz", },
  { "name": "bulle Bazzara", "email": "nuzrq.onmmnen@gerggba82.pbz", },
  { "name": "Alban Nurkollari", "email": "nyona.ahexbyynev@gerggba82.pbz", }];

const tempArr2 = [
  { "name": "Alban Nurkollari", "email": "nyona.ahexbyynev@gerggba82.pbz", },
  { "name": "bulle Bazzara", "email": "nuzrq.onmmnen@gerggba82.pbz", },
  { "name": "gron Kabashi", "email": "nteba.xnonfuv@gerggba82.pbz", },
  { "name": "gron Kabashi", "email": "nteba.xnonfuv@gerggba82.pbz", },
  { "name": "bulle Bazzara", "email": "nuzrq.onmmnen@gerggba82.pbz", },
  { "name": "Alban Nurkollari", "email": "nyona.ahexbyynev@gerggba82.pbz", }
];

  // see if my function cuts the array where is should.
  test('split array1', () => {
    const combine1 = getPages(tempArr, 3);
    expect(combine1.length).toEqual(1)
  });
  
  test('split array2', () => {
    const combine2 = getPages(tempArr2, 3);
    expect(combine2.length).toEqual(2)
  })