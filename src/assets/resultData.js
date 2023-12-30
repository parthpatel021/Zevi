const resultData = [
    {
        __id: 'A001',
        name: 'Round neck cotton Tee',
        imgURL: 'https://s3-alpha-sig.figma.com/img/791d/7809/6dd14543cc6cdb5f9d910f7a7f5ec23d?Expires=1704672000&Signature=l3ta-dPOhELOBXZoOET-SJC~EYhJj7q0Kamhbz6~TFrYMI8HDGsm8u5rM4H7vSEoCg3tdY7HrHrXjrSe-lUa1UDv0vITaWqnl91awdsW32-a7z-0UtXr2tpWnjBnJOYIyAzGRmMKh9gqJKU3mglcdMl0cZvBmXfRVIbzS3YGS1SQXzRD8c0-QeFoY~0zZKKoOCqc4Lx-LsoEfRGAFB-GxArucj1laUy77Ycir-k2YDxNULtqjy6VVq6bfItY88W0A00nadL7ieJoh0eOvk0gw33LOdy0-IoE2aAHsNNxMDiIxtww2Jo1b6b8iaITCHgQIV0D9oKkg2GNrcjvxmPAFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        prevPrice: 599,
        currPrice: 549,
        rating: 5,
        reviewNumber: 210,
        brand: 'Mango',
    },
    {
        __id: 'A002',
        name: 'High waist trousers',
        imgURL: 'https://s3-alpha-sig.figma.com/img/ee4a/df52/d4c05a369c6b4bea6e2e0fa73e4dabe6?Expires=1704672000&Signature=Srixa0maWTazhvJsopvtTKM-GW7vZ8blCY1DJINDUgDXTmu9wmyqk4yhCWeu5lhyjjNVRGR4E~6DcM9EUGvFboivrerCNqc0kP~1yOrXkHREdZ3pSiyr-iv2kir7AU2UO3lifcgIL7DZ0ehwCiE2eAV8LmzxXSaKXo9-0oLPiIhxau1bsfYO0GwOzmQXIx5-IGqxGHidfZ4~uJKsIMjMjO~5-2gxT1tb-daaxrTjX-3dvGkOXIZTzUZHBUrBo1auXLi6Be8sPo-9~nK0yPJcRGIMnUIxb7YOmrqMlOwLyq1kn1W9oTu0vucCgiFxolyfjuA~xxEGq~VrD~sKSmCPMQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        prevPrice: 999,
        currPrice: 749,
        rating: 4,
        reviewNumber: 210,
        brand: 'Mango',
    },
    {
        __id: 'A003',
        name: 'High neck pullover',
        imgURL: 'https://s3-alpha-sig.figma.com/img/93a8/cb1d/db5d548e329451c090f06d32720681d6?Expires=1704672000&Signature=J8FO9vNCzGBqsMTl1NywcVxFQ2RTn9l3u~qyR81qas3jtQ6TZWs5bdnAoUKM2QHd3AM63HDH~DOoAs3TIOBDEhk0XWB~a4KV7o0d9GA5uhGWtysvo6rd8Wlh4NoOcqrat1TadPVon9vz50HxAbMDh-PXtNGmKbCGjUJ9sZs6hgVLItSWbSx2c1a31FrJnuuutYTr1CAW-JwhCRlmfCZqSYLuyJ4HvldlbJdIONbqLTaVuc-tuWTv302zJzVJshL4~07t52QtJE4bzhRMyjYbkqoDCgE53SADzjvmkYt1Xh9-LEAp5Daq9~Br5hix9kKSbZzwEdaqG-TTf5jilfPPxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        prevPrice: 899,
        currPrice: 849,
        rating: 3,
        reviewNumber: 210,
        brand: 'H&M',
    },
    {
        __id: 'A004',
        name: 'satin jumpsuit',
        imgURL: 'https://s3-alpha-sig.figma.com/img/85b8/9925/ab16ec79abc1e68c7076a8c51d307a81?Expires=1704672000&Signature=kQmuxxjwihhAuC8~~AD~rJkK2kuXQvO22yllYZpVlwpo9NL8zUNm-Z~4dNJJHLbJdFr7USup1n8CGqrca6ECUiQwJAP4F61OlApLtSWMur6HbhGOJwQgjPvpfPm~Jft4PuUYiAqURfGG8c3PX8-nAIFlK97k-k~3hZ~0Xy99DCspsftcciGgXOoFQ~JiPVbvP0U5Tk14cQMMvTGHA6Typ4Mkihj~sJZECisAcv1pbYK7OhcOawLD19ttQbEUYJgbm-37~rC3QHG3ssqlj0P~XDFBVOPVM7RWEB0NCmXsJ5EHec8OomOH9QvbY3fBzVMdrCr4PUzMuLmiubMT9PnEGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        prevPrice: 650,
        currPrice: 549,
        rating: 2,
        reviewNumber: 210,
        brand: 'H&M',
    },
    {
        __id: 'A005',
        name: 'Round neck cotton Tee',
        imgURL: 'https://s3-alpha-sig.figma.com/img/f887/f131/38bbac3a9715dd3a4bd022b6e1ea79e4?Expires=1704672000&Signature=bHQn8CaJu6eP7fYwGyG~mGF49WiT5TUWHg7Ea53V-BlZNpqLg0HQAFYBFafuc0ZnR8m3KfLwQit~HTQ5rMUHQ4-3l9zyel70x8Xv-ENH~suNsOrjcB4N1yshWXpNp91qbKc3UkHcOmfcg3EqDexxpja0EwL-si~iekCP9PbY3RJPBq2mkLQyllNBFRLsuwrK~QPHqtPRy-Pk6EZlT6R5VMmCuwVZAev865oLfIBTcvUJVSweyIsV31T3eTC95F7fRrT-JBru6-S03aMgRFIotzpNEz4Egii09TyE0NPhPre-xHrQrH7vzg0~rzxcIHmJkvQZw~yynmeR0BrVzO2MQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        prevPrice: 599,
        currPrice: 499,
        rating: 1,
        reviewNumber: 210,
        brand: 'H&M',
    },
    {
        __id: 'A006',
        name: 'High waist trousers',
        imgURL: 'https://s3-alpha-sig.figma.com/img/d48e/47ba/8237debf735b1193e664587ceb1c6393?Expires=1704672000&Signature=YiITFwpQNSZYxuJ1GMObV-AeBTU6gDThg-5FFe7cjqxusyGWh-9TH9EpkKSdI4s8vM8ozBdRsrCmEKn4OwvjSY8Dg1iefG-Y59SM1eeMZgK4Vpm3Z5daYwAmllZapyDmmoA64Te6IXlaG~J5NSC5sLaT1rbkdjGf93ERrWi6CBFPGhxTRIG2BSpZil6IGGlyc~ex7cLPPh2L0zGhjR1IgmUZ7x0mJfaXY9YcfIXY74O060-KnusbtBvLm9E6KWY~VfMBpAZW248exJaAaKiy3~2EPYOe6YOVyQJY-P1rLFZjgxAoziMX99Glk3xjEc3ASxn2uCb8KnTcv89HNVnk8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        prevPrice: 999,
        currPrice: 749,
        rating: 4,
        reviewNumber: 210,
        brand: 'Mango',
    },
    {
        __id: 'A007',
        name: 'satin jumpsuit',
        imgURL: 'https://s3-alpha-sig.figma.com/img/6303/14a8/52953bbaf684029241f0f4334bdfa5fa?Expires=1704672000&Signature=BeU8mYOdZVGqDJP-9ogmcERNxr4Uhok3WZORl5healZSSNjtnWFS7egp2qMNQB2kX-wtLdbf-A~GoS0saA4VfyeGdRSrXRrMbkY87VmV8IyzCfa6pkFXK~bumWCOTlFY5aXCj8nFAB29tUys530mQl3~AnSktI05fHf~CUYBKiWA2lvwOiPvc0SQEbfy4jORsNy-lrd9m5qwBkLmDdkyDyJP2Y6~5iCo1mgqMCCZsYDoxAP06Twlf~57b~w4z4-LcFAYbcCbiXY61rmLok5FckSH4u0B~IZAWh6GpIFEm1~LlP5sXhGD5UaXb4Gyw8QRx15pG6EhGSMWq~pPh9sAKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        prevPrice: 650,
        currPrice: 499,
        rating: 5,
        reviewNumber: 210,
        brand: 'H&M',
    },
    {
        __id: 'B001',
        name: 'Round neck cotton Tee',
        imgURL: 'https://s3-alpha-sig.figma.com/img/791d/7809/6dd14543cc6cdb5f9d910f7a7f5ec23d?Expires=1704672000&Signature=l3ta-dPOhELOBXZoOET-SJC~EYhJj7q0Kamhbz6~TFrYMI8HDGsm8u5rM4H7vSEoCg3tdY7HrHrXjrSe-lUa1UDv0vITaWqnl91awdsW32-a7z-0UtXr2tpWnjBnJOYIyAzGRmMKh9gqJKU3mglcdMl0cZvBmXfRVIbzS3YGS1SQXzRD8c0-QeFoY~0zZKKoOCqc4Lx-LsoEfRGAFB-GxArucj1laUy77Ycir-k2YDxNULtqjy6VVq6bfItY88W0A00nadL7ieJoh0eOvk0gw33LOdy0-IoE2aAHsNNxMDiIxtww2Jo1b6b8iaITCHgQIV0D9oKkg2GNrcjvxmPAFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        prevPrice: 599,
        currPrice: 549,
        rating: 5,
        reviewNumber: 210,
        brand: 'Mango',
    },
    {
        __id: 'B002',
        name: 'High waist trousers',
        imgURL: 'https://s3-alpha-sig.figma.com/img/ee4a/df52/d4c05a369c6b4bea6e2e0fa73e4dabe6?Expires=1704672000&Signature=Srixa0maWTazhvJsopvtTKM-GW7vZ8blCY1DJINDUgDXTmu9wmyqk4yhCWeu5lhyjjNVRGR4E~6DcM9EUGvFboivrerCNqc0kP~1yOrXkHREdZ3pSiyr-iv2kir7AU2UO3lifcgIL7DZ0ehwCiE2eAV8LmzxXSaKXo9-0oLPiIhxau1bsfYO0GwOzmQXIx5-IGqxGHidfZ4~uJKsIMjMjO~5-2gxT1tb-daaxrTjX-3dvGkOXIZTzUZHBUrBo1auXLi6Be8sPo-9~nK0yPJcRGIMnUIxb7YOmrqMlOwLyq1kn1W9oTu0vucCgiFxolyfjuA~xxEGq~VrD~sKSmCPMQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        prevPrice: 999,
        currPrice: 749,
        rating: 4,
        reviewNumber: 210,
        brand: 'Mango',
    },
    {
        __id: 'B003',
        name: 'High neck pullover',
        imgURL: 'https://s3-alpha-sig.figma.com/img/93a8/cb1d/db5d548e329451c090f06d32720681d6?Expires=1704672000&Signature=J8FO9vNCzGBqsMTl1NywcVxFQ2RTn9l3u~qyR81qas3jtQ6TZWs5bdnAoUKM2QHd3AM63HDH~DOoAs3TIOBDEhk0XWB~a4KV7o0d9GA5uhGWtysvo6rd8Wlh4NoOcqrat1TadPVon9vz50HxAbMDh-PXtNGmKbCGjUJ9sZs6hgVLItSWbSx2c1a31FrJnuuutYTr1CAW-JwhCRlmfCZqSYLuyJ4HvldlbJdIONbqLTaVuc-tuWTv302zJzVJshL4~07t52QtJE4bzhRMyjYbkqoDCgE53SADzjvmkYt1Xh9-LEAp5Daq9~Br5hix9kKSbZzwEdaqG-TTf5jilfPPxg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        prevPrice: 899,
        currPrice: 849,
        rating: 3,
        reviewNumber: 210,
        brand: 'H&M',
    },
    {
        __id: 'B004',
        name: 'satin jumpsuit',
        imgURL: 'https://s3-alpha-sig.figma.com/img/85b8/9925/ab16ec79abc1e68c7076a8c51d307a81?Expires=1704672000&Signature=kQmuxxjwihhAuC8~~AD~rJkK2kuXQvO22yllYZpVlwpo9NL8zUNm-Z~4dNJJHLbJdFr7USup1n8CGqrca6ECUiQwJAP4F61OlApLtSWMur6HbhGOJwQgjPvpfPm~Jft4PuUYiAqURfGG8c3PX8-nAIFlK97k-k~3hZ~0Xy99DCspsftcciGgXOoFQ~JiPVbvP0U5Tk14cQMMvTGHA6Typ4Mkihj~sJZECisAcv1pbYK7OhcOawLD19ttQbEUYJgbm-37~rC3QHG3ssqlj0P~XDFBVOPVM7RWEB0NCmXsJ5EHec8OomOH9QvbY3fBzVMdrCr4PUzMuLmiubMT9PnEGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        prevPrice: 650,
        currPrice: 549,
        rating: 2,
        reviewNumber: 210,
        brand: 'H&M',
    },
    {
        __id: 'B005',
        name: 'Round neck cotton Tee',
        imgURL: 'https://s3-alpha-sig.figma.com/img/f887/f131/38bbac3a9715dd3a4bd022b6e1ea79e4?Expires=1704672000&Signature=bHQn8CaJu6eP7fYwGyG~mGF49WiT5TUWHg7Ea53V-BlZNpqLg0HQAFYBFafuc0ZnR8m3KfLwQit~HTQ5rMUHQ4-3l9zyel70x8Xv-ENH~suNsOrjcB4N1yshWXpNp91qbKc3UkHcOmfcg3EqDexxpja0EwL-si~iekCP9PbY3RJPBq2mkLQyllNBFRLsuwrK~QPHqtPRy-Pk6EZlT6R5VMmCuwVZAev865oLfIBTcvUJVSweyIsV31T3eTC95F7fRrT-JBru6-S03aMgRFIotzpNEz4Egii09TyE0NPhPre-xHrQrH7vzg0~rzxcIHmJkvQZw~yynmeR0BrVzO2MQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        prevPrice: 599,
        currPrice: 499,
        rating: 1,
        reviewNumber: 210,
        brand: 'H&M',
    },
    {
        __id: 'B006',
        name: 'High waist trousers',
        imgURL: 'https://s3-alpha-sig.figma.com/img/d48e/47ba/8237debf735b1193e664587ceb1c6393?Expires=1704672000&Signature=YiITFwpQNSZYxuJ1GMObV-AeBTU6gDThg-5FFe7cjqxusyGWh-9TH9EpkKSdI4s8vM8ozBdRsrCmEKn4OwvjSY8Dg1iefG-Y59SM1eeMZgK4Vpm3Z5daYwAmllZapyDmmoA64Te6IXlaG~J5NSC5sLaT1rbkdjGf93ERrWi6CBFPGhxTRIG2BSpZil6IGGlyc~ex7cLPPh2L0zGhjR1IgmUZ7x0mJfaXY9YcfIXY74O060-KnusbtBvLm9E6KWY~VfMBpAZW248exJaAaKiy3~2EPYOe6YOVyQJY-P1rLFZjgxAoziMX99Glk3xjEc3ASxn2uCb8KnTcv89HNVnk8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        prevPrice: 999,
        currPrice: 749,
        rating: 4,
        reviewNumber: 210,
        brand: 'Mango',
    },
    {
        __id: 'B007',
        name: 'High neck pullover',
        imgURL: 'https://s3-alpha-sig.figma.com/img/340a/652b/889230e91f80bb89808c67ee454dad84?Expires=1704672000&Signature=cNgtXXKbjHAChauCaAaYQAfYOPQiS1pbiyeH1-jUg2ckXbCpnSfhAgEihqZWb8cWuQCRT6BPLTT-U08hGP4s0a9EvMpkfqmAnAABmmeafkxaZYiotuer7iWH5GUT8~h49ps38JT00Ey3I8Yv~mIUNdETVLqK7ioTYMY6~3c28mu2XhJP5r3-10wbrDqj~9ujGi4B9A9N~-fdPFc3AXePiH4fjQZ46ZQ8wmE5KVIovuaaKOg9cr2r1~AJpNeqYIjSLJz8NYxyhD8W8yC9v3VJs10MzF1ZpAY0hIp9KVALk3oVORRiYvb4SYF0DPIY-1IinEXB0IQPZ97cETk7LCzPOg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        prevPrice: 899,
        currPrice: 849,
        rating: 3,
        reviewNumber: 210,
        brand: 'Mango',
    },
    {
        __id: 'B008',
        name: 'satin jumpsuit',
        imgURL: 'https://s3-alpha-sig.figma.com/img/6303/14a8/52953bbaf684029241f0f4334bdfa5fa?Expires=1704672000&Signature=BeU8mYOdZVGqDJP-9ogmcERNxr4Uhok3WZORl5healZSSNjtnWFS7egp2qMNQB2kX-wtLdbf-A~GoS0saA4VfyeGdRSrXRrMbkY87VmV8IyzCfa6pkFXK~bumWCOTlFY5aXCj8nFAB29tUys530mQl3~AnSktI05fHf~CUYBKiWA2lvwOiPvc0SQEbfy4jORsNy-lrd9m5qwBkLmDdkyDyJP2Y6~5iCo1mgqMCCZsYDoxAP06Twlf~57b~w4z4-LcFAYbcCbiXY61rmLok5FckSH4u0B~IZAWh6GpIFEm1~LlP5sXhGD5UaXb4Gyw8QRx15pG6EhGSMWq~pPh9sAKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        prevPrice: 650,
        currPrice: 499,
        rating: 5,
        reviewNumber: 210,
        brand: 'H&M',
    },
];

export default resultData;