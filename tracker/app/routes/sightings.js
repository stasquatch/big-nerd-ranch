import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let record1 = this.store.createRecord('sighting', {
      location: 'Atlanta',
      sightedAt: new Date('2016-02-09')
    });
    record1.set('location', 'Paris, France');
    console.log("Record 1 location: " + record1.get('location'));

    let record2 = this.store.createRecord('sighting', {
     location: 'Calloway',
     sightedAt: new Date('2016-03-14')
    });

    let record3 = this.store.createRecord('sighting', {
    location: '',
    sightedAt: new Date('2016-03-21')
    });

    return [record1, record2, record3];
  }
});
