import { formatStrDate } from 'utils/functions';
import { minLength } from 'utils/validation';

describe('minLength', ()=>{
  test('check if an string could be empty', ()=>{
    expect(minLength('',0)).toBe(true)
  })

  test('check if an string has a minimum of 3 characters', ()=>{
    expect(minLength('sol',3)).toBe(true)
    expect(minLength('a',3)).toBe(false)
  })  
})

describe('formatDate',()=>{
  test('transform string iso format date to an array of date (dd-mm-aaaa) and time (hh:mm)',()=>{
    expect(formatStrDate('2022-07-24T01:26:08')).toStrictEqual(['24-07-2022','01:26'])
  })
})