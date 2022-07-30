let countries = document.querySelector("#servicesec");
let cities = document.querySelector("#doctors")

let data = {
    paediatrics: ['Mithila Shrinivas Amin', 'Avi Sanghavi', 'Shivan Sanghavi'],
    nephrology: ['Vikas Bharti', 'Amar Kulkarni'],
    orthopaedics: ['Jigar Patel', 'Mayur Rabhadiya', 'Mayur Dhabade', 'Sanchin Mahajan', 'Mohit Shetye', 'Ghaniuzzoa Asadi'],
    surgeons: ['Abhijeet Sawant', 'Dhirendrakumar Patil', 'Akshay Pednekar', 'Sundram Pillai', 'Aditya Mandake', 'Khuzema S. Fatehi', 'Sundram Pillai'],
    gastroenterologist: ['Vikas Pandey'],
    phychiatrist: ['Girish Date'],
    dentist: ['Supriya Sawant', 'Omprakash Gajare', 'Varsha Wagh', 'Anita Mehta', 'Konica Nanda Bhadra', 'Komal Navalkha'],
    ent: ['Archana S', 'Abhijjet Khond', 'Florida Sharin'],
    ophthalmology: ['Dilip Shah', 'Pratik Bhadra', 'Sanjana Shigwan'],
    og: ['Kiyv', 'Lutsk'],
    dermatologist: ['Pallavi Rathi', 'Gautam Varma'],
    gynaecologist: ['Dimple Chudkar', 'Deepbhadra', 'Rima Dhawale', 'Neelima Bhanushali'],
    general: ['Alka Deshpande', 'Hrashal Joshi', 'Nimesh Patel'],
    generalsurgery: ['Prasad Gole', 'Mahesh Doshi', 'Deodas Shah'],
    dermatology: ['Bhakti Adkar', 'Shilpa Bodele'],
    physiotheropist: ['Kunal Aher', 'Dinesh Maurya'],
    cardiology: ['Aditya Dhawale', 'Rakesh Trimale'],
    neurology: ['Sneh Shashank', 'Pradeep Tiwari'],
}



countries.addEventListener('change', function () {
    let city = data[this.value]
    cities.length = 0;

    addOptions(cities, city)
})

function addOptions(select, arr) {
    for (let i = 0; i < arr.length; i++) {
        select.add(new Option(arr[i]))
    }
}
