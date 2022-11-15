import { renderBlock } from './lib.js'

function formatedDate(date:Date):string {
  return date.toLocaleDateString()
}

export function renderSearchFormBlock (
  checkInDate:Date = new Date(Date.now() + 24*60*60*1000), 
  checkOutDate:Date = new Date(+checkInDate + 24*60*60*1000*2) 
):void {

  const dayCheckInDate = formatedDate(checkInDate);
  const dayCheckOutDate = formatedDate(checkOutDate) ;
  const today = new Date();
  const minDate = formatedDate(today);
  const maxDate = formatedDate(new Date(today.getFullYear(), today.getMonth() + 2, 0 + 1))




  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${dayCheckInDate}" min="${minDate}" max="${maxDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${dayCheckOutDate}" min="${minDate}" max="${maxDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
