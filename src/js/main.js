let content = ''

const series = new Map();
series.set('Abşeron', '01')
series.set('Ağdam', '02')
series.set('Ağdaş', '03')
series.set('Ağcabədi', '04')
series.set('Ağstafa', '05')
series.set('Ağsu', '06')
series.set('Astara', '07')
series.set('Balakən', '08')
series.set('Bərdə', '09')
series.set('Bakı', '10, 77, 90')
series.set('Beyləqan', '11')
series.set('Biləsuvar', '12')


const cityNo = document.getElementById('city_series')

for (const [key, val] of series) {

       content +=
              `<tr>
<td>${key}</td>
<td>${val}</td>
</tr>`

}

cityNo.innerHTML += content