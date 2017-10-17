import * as firebase from 'firebase';
import moment from 'moment';

const config = {
  apiKey: "AIzaSyBbQCrRDtI46a02Qxosxm9ADGhtNoOCVgc",
  authDomain: "expensify-d74d4.firebaseapp.com",
  databaseURL: "https://expensify-d74d4.firebaseio.com",
  projectId: "expensify-d74d4",
  storageBucket: "expensify-d74d4.appspot.com",
  messagingSenderId: "487272229227"
};

firebase.initializeApp(config);

const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

const onValueChange = database.ref('expenses').on('value', snapshot => {
  const expenses = [];
  snapshot.forEach(child => {
    expenses.push({
      id: child.key,
      ...child.val()
    });
  });
  console.log(expenses);
}, e => {
  console.log('Error fetching data', e);
});

// database.ref('expenses').push({
//   description: 'Gum',
//   note: '',
//   amount: 195,
//   createdAt: 0
// });
//
// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: moment(0).subtract(4, 'days').valueOf()
// });
//
// database.ref('expenses').push({
//   description: 'Credit Card',
//   note: '',
//   amount: 4500,
//   createdAt: moment(0).add(4, 'days').valueOf()
// });

// database.ref('notes').push({
//   title: 'Second note',
//   body: 'This is another note'
// });

// database.ref('notes/-KwfxTJwlBqjp-X7RFN2').update({
//   body: 'Updated note'
// });

// Name is a title at company

// const onValueChange = database.ref().on('value', snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, e => {
//   console.log('Error fetching data', e);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error fetching data', e);
// });
//
// setTimeout(() => {
//   database.ref()
//     .update({
//       age: 34
//     });
// }, 3500);
//
// setTimeout(() => {
//   database.ref()
//     .off('value', onValueChange);
// }, 7000);
//
// setTimeout(() => {
//   database.ref()
//     .update({
//       age: 35
//     });
// }, 10500);

// database.ref()
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Reiner Leal',
//   age: 33,
//   stressLevel: 6,
//   job: {
//     title: 'Systems Engineer',
//     company: 'CCG Services, Inc.'
//   },
//   location: {
//     city: 'Phoenix',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch(e => {
//   console.log('This failed.', e);
// });
//
// database.ref()
//   .update({
//     stressLevel: 9,
//     'job/title': 'Software Engineer',
//     'location/city': 'Frisco'
//   })
//   .then(() => {
//     console.log('Updated data');
//   })
//   .catch(e => {
//     console.log('Error udpating data', e);
//   });

// database.ref('isSingle').set(null);

//
// database.ref('attributes').set({
//   height: (5 * 12) + 11,
//   weight: 200
// }).then(() => {
//   console.log('Data updated');
// }).catch(e => {
//   console.log('This failed', e);
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   })
//   .catch(e => {
//     console.log('Did not remove data', e);
//   });
