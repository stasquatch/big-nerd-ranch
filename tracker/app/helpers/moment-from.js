import Ember from 'ember';

export function momentFrom(params) {
  var time = window.moment(...params);
  var formatted = time.fromNow();
  return new Ember.Handlebars.SafeString(
    '<span class="text-primary">'
    + formatted + '</span>'
  );
}

export default Ember.Helper.helper(momentFrom);
