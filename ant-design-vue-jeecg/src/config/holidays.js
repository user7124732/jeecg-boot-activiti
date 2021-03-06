/*中国节日放假安排，1法定调休，2法定放假 数据来自国务院网站：http://www.gov.cn/zhengce*/
const holidays = {
    '2020':{
     "20200101": 2,
     "20200119": 1,
     "20200124": 2,
     "20200125": 2,
     "20200126": 2,
     "20200127": 2,
     "20200128": 2,
     "20200129": 2,
     "20200130": 2,
     "20200201": 1,
     "20200404": 2,
     "20200405": 2,
     "20200406": 2,
     "20200426": 1,
     "20200501": 2,
     "20200502": 2,
     "20200503": 2,
     "20200504": 2,
     "20200505": 2,
     "20200509": 1,
     "20200625": 2,
     "20200626": 2,
     "20200627": 2,
     "20200628": 1,
     "20200927": 1,
     "20201001": 2,
     "20201002": 2,
     "20201003": 2,
     "20201004": 2,
     "20201005": 2,
     "20201006": 2,
     "20201007": 2,
     "20201008": 2,
     "20201010": 1
   },
    '2019':{
      "20191001": 2,
      "20191002": 2,
      "20191003": 2,
      "20191004": 2,
      "20191005": 2,
      "20191006": 2,
      "20191007": 2,
      "20191012": 1,
      "20190101": 2,
      "20190202": 1,
      "20190203": 1,
      "20190204": 2,
      "20190205": 2,
      "20190206": 2,
      "20190207": 2,
      "20190208": 2,
      "20190209": 2,
      "20190210": 2,
      "20190405": 2,
      "20190406": 2,
      "20190407": 2,
      "20190501": 2,
      "20190607": 2,
      "20190608": 2,
      "20190609": 2,
      "20190913": 2,
      "20190914": 2,
      "20190915": 2,
      "20190929": 1
    },
}

export function getHolidaysByYear(year) {
  return holidays[year];
}