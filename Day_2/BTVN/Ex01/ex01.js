// chỉnh file
let movies = [
    {
      "id": 1,
      "title": "Keeping Up with the Steins",
      "release": "2024-05-10",
      "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      "producer": 5,
      "director": 1,
      "genres": [
        "Comedy",
        "Action"
      ],
      "stars": []
    },
    {
      "id": 2,
      "title": "Quartet",
      "release": "2024-05-25",
      "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
      "producer": 1,
      "director": 2,
      "genres": [
        "Comedy",
        "Cartoon",
        "Action"
      ],
      "stars": [
        2,
        "3",
        3,
        1
      ]
    },
    {
      "id": 3,
      "title": "This Boy's Life",
      "release": "2024-05-28",
      "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
      "producer": 2,
      "director": 5,
      "genres": [
        "Drama",
        "Comedy"
      ],
      "stars": [
        3,
        2,
        1
      ]
    },
    {
      "id": 4,
      "title": "Each Dawn I Die",
      "release": "2024-05-03",
      "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      "producer": 4,
      "director": 2,
      "genres": [
        "Cartoon"
      ],
      "stars": [
        1,
        2
      ]
    },
    {
      "id": 5,
      "title": "Green Slime, The",
      "release": "2024-05-07",
      "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
      "producer": 1,
      "director": 2,
      "genres": [
        "Action",
        "Comedy"
      ],
      "stars": [
        4,
        1,
        6,
        3,
        5
      ]
    },
    {
      "id": 6,
      "title": "Unknown Known, The",
      "release": "2024-05-14",
      "description": "Nullam sit amet turpis elementum ligula vehicula consequat.",
      "producer": 4,
      "director": 4,
      "genres": [
        "Action"
      ],
      "stars": [
        5,
        4,
        2,
        3
      ]
    },
    {
      "id": 7,
      "title": "Bigger Than Life",
      "release": "2024-05-07",
      "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula",
      "producer": 3,
      "director": 4,
      "genres": [
        "Cartoon",
        "Comedy"
      ],
      "stars": [
        2,
        1,
        3
      ]
    },
    {
      "id": 8,
      "title": "October",
      "release": "2024-05-18",
      "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "producer": 4,
      "director": 5,
      "genres": [
        "Drama",
        "Comedy"
      ],
      "stars": [
        5,
        6,
        2,
        4,
        3,
        1
      ]
    },
    {
      "id": 9,
      "title": "Behind the Screen",
      "release": "2024-05-26",
      "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius.",
      "producer": 4,
      "director": 6,
      "genres": [
        "Drama"
      ],
      "stars": [
        3,
        5,
        6,
        4,
        1,
        2
      ]
    },
    {
      "id": 10,
      "title": "Screamers",
      "release": "2024-05-24",
      "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula.",
      "producer": 2,
      "director": 3,
      "genres": [
        "Drama",
        "Cartoon"
      ],
      "stars": [
        1,
        5,
        3,
        4,
        6
      ]
    }
  ]
// làm lại cái trải mảng theo cách reducer

let traiMang = movies.reduce((mov, gen) => {
    return mov.concat(gen.genres)
},[])
console.log(traiMang);
