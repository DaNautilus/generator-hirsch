'use strict';

describe('Unit: <%= appname %>.services.<%= classedName %>', function () {

  beforeEach(module('app'));

  it('should contain an <%= appname %>.services.<%= classedName %> factory',
    inject(function (<%= prefix %><%= classedName %>) {
      expect(<%= prefix %><%= classedName %>).not.to.equal(null);
    })
  );


});
