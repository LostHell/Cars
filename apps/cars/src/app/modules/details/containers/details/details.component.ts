import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { strict } from 'assert';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  cars = [
    {
      id: 1,
      name: 'Audi A3',
      description:
        'Автомобилът е нов внос от Белгия.Отлична скоростна кутия и ходова част , перфектно работещ двигател, РАБОТЕЩ КЛИМАТИК, ABS и др. Автокъщата предлага транспорт на закупените автомобили до КАТ, също така и регистрация и съдействие за изваждане на транзитни номера. Всички автомобили на автокъщата са с гарантиран произход! ! ! За повече информация на тел0899930088 ',
      price: '4 899 $',
      imageUrl:
        'https://magazin.rv24.de/wp-content/uploads/2020/02/2020-Audi-A3-40-TFSI-Fahrbericht-Test-Review-Jens-Stratmann-13.jpg',
      createdOn: Date.now(),
    },
    {
      id: 2,
      name: 'Audi A3 Sportback Audi A3 SportbackAudi A3 Sportback',
      description:
        'Автомобилът е нов внос от Белгия.Отлична скоростна кутия и ходова част , перфектно работещ двигател, РАБОТЕЩ КЛИМАТИК, ABS и др. Автокъщата предлага транспорт на закупените автомобили до КАТ, също така и регистрация и съдействие за изваждане на транзитни номера. Всички автомобили на автокъщата са с гарантиран произход! ! ! За повече информация на тел0899930088 ',
      price: '4 899',
      imageUrl: [
        'https://www.check24.de/kfz-versicherung/img/automarken/audi/audi-q5-2018.jpg',
        'https://www.check24.de/kfz-versicherung/img/automarken/audi/audi-q5-2018.jpg',
        'https://www.check24.de/kfz-versicherung/img/automarken/audi/audi-q5-2018.jpg',
      ],
      createdOn: Date.now(),
    },
    {
      id: 3,
      name: 'Audi A3 Sportback',
      description:
        'Автомобилът е нов внос от Белгия.Отлична скоростна кутия и ходова част , перфектно работещ двигател, РАБОТЕЩ КЛИМАТИК, ABS и др. Автокъщата предлага транспорт на закупените автомобили до КАТ, също така и регистрация и съдействие за изваждане на транзитни номера. Всички автомобили на автокъщата са с гарантиран произход! ! ! За повече информация на тел0899930088 ',
      price: '4 899 $',
      imageUrl:
        'https://media.caradvice.com.au/image/private/q_auto/v1555285325/f8bzv7tl5ueo0chv6gcj.jpg',
      createdOn: Date.now(),
    },
    {
      id: 4,
      name: 'Audi A3',
      description:
        'Автомобилът е нов внос от Белгия.Отлична скоростна кутия и ходова част , перфектно работещ двигател, РАБОТЕЩ КЛИМАТИК, ABS и др. Автокъщата предлага транспорт на закупените автомобили до КАТ, също така и регистрация и съдействие за изваждане на транзитни номера. Всички автомобили на автокъщата са с гарантиран произход! ! ! За повече информация на тел0899930088 ',
      price: '4 899',
      imageUrl:
        'https://magazin.rv24.de/wp-content/uploads/2020/02/2020-Audi-A3-40-TFSI-Fahrbericht-Test-Review-Jens-Stratmann-13.jpg',
      createdOn: Date.now(),
    },
    {
      id: 5,
      name: 'Audi A3',
      description:
        'Автомобилът е нов внос от Белгия.Отлична скоростна кутия и ходова част , перфектно работещ двигател, РАБОТЕЩ КЛИМАТИК, ABS и др. Автокъщата предлага транспорт на закупените автомобили до КАТ, също така и регистрация и съдействие за изваждане на транзитни номера. Всички автомобили на автокъщата са с гарантиран произход! ! ! За повече информация на тел0899930088 ',
      price: '4 899',
      imageUrl:
        'https://magazin.rv24.de/wp-content/uploads/2020/02/2020-Audi-A3-40-TFSI-Fahrbericht-Test-Review-Jens-Stratmann-13.jpg',
      createdOn: Date.now(),
    },
    {
      id: 6,
      name: 'Audi A3',
      description:
        'Автомобилът е нов внос от Белгия.Отлична скоростна кутия и ходова част , перфектно работещ двигател, РАБОТЕЩ КЛИМАТИК, ABS и др. Автокъщата предлага транспорт на закупените автомобили до КАТ, също така и регистрация и съдействие за изваждане на транзитни номера. Всички автомобили на автокъщата са с гарантиран произход! ! ! За повече информация на тел0899930088 ',
      price: '4 899 $',
      imageUrl:
        'https://magazin.rv24.de/wp-content/uploads/2020/02/2020-Audi-A3-40-TFSI-Fahrbericht-Test-Review-Jens-Stratmann-13.jpg',
      createdOn: Date.now(),
    },
    {
      id: 7,
      name: 'Audi A3 Sportback',
      description:
        'Автомобилът е нов внос от Белгия.Отлична скоростна кутия и ходова част , перфектно работещ двигател, РАБОТЕЩ КЛИМАТИК, ABS и др. Автокъщата предлага транспорт на закупените автомобили до КАТ, също така и регистрация и съдействие за изваждане на транзитни номера. Всички автомобили на автокъщата са с гарантиран произход! ! ! За повече информация на тел0899930088 ',
      price: '4 899',
      imageUrl:
        'https://www.check24.de/kfz-versicherung/img/automarken/audi/audi-q5-2018.jpg',
      createdOn: Date.now(),
    },
    {
      id: 8,
      name: 'Audi A3 Sportback',
      description:
        'Автомобилът е нов внос от Белгия.Отлична скоростна кутия и ходова част , перфектно работещ двигател, РАБОТЕЩ КЛИМАТИК, ABS и др. Автокъщата предлага транспорт на закупените автомобили до КАТ, също така и регистрация и съдействие за изваждане на транзитни номера. Всички автомобили на автокъщата са с гарантиран произход! ! ! За повече информация на тел0899930088 ',
      price: '4 899 $',
      imageUrl:
        'https://media.caradvice.com.au/image/private/q_auto/v1555285325/f8bzv7tl5ueo0chv6gcj.jpg',
      createdOn: Date.now(),
    },
    {
      id: 9,
      name: 'Audi A3',
      description:
        'Автомобилът е нов внос от Белгия.Отлична скоростна кутия и ходова част , перфектно работещ двигател, РАБОТЕЩ КЛИМАТИК, ABS и др. Автокъщата предлага транспорт на закупените автомобили до КАТ, също така и регистрация и съдействие за изваждане на транзитни номера. Всички автомобили на автокъщата са с гарантиран произход! ! ! За повече информация на тел0899930088 ',
      price: '4 899',
      imageUrl:
        'https://magazin.rv24.de/wp-content/uploads/2020/02/2020-Audi-A3-40-TFSI-Fahrbericht-Test-Review-Jens-Stratmann-13.jpg',
      createdOn: Date.now(),
    },
    {
      id: 10,
      name: 'Audi A3',
      description:
        'Автомобилът е нов внос от Белгия.Отлична скоростна кутия и ходова част , перфектно работещ двигател, РАБОТЕЩ КЛИМАТИК, ABS и др. Автокъщата предлага транспорт на закупените автомобили до КАТ, също така и регистрация и съдействие за изваждане на транзитни номера. Всички автомобили на автокъщата са с гарантиран произход! ! ! За повече информация на тел0899930088 ',
      price: '4 899',
      imageUrl:
        'https://magazin.rv24.de/wp-content/uploads/2020/02/2020-Audi-A3-40-TFSI-Fahrbericht-Test-Review-Jens-Stratmann-13.jpg',
      createdOn: Date.now(),
    },
  ];
  item: {
    id;
    name;
    description;
    price;
    imageUrl;
    createdOn;
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.item = this.cars.find(
      (x) => x.id === Number(this.route.snapshot.params.id)
    );

    console.log(this.item);
  }
}
