var Parse = {

  server: 'http://127.0.0.1:3000',

  createMessage: function(message, successCB, errorCB = null) {
    $.ajax({
      url: 'http://127.0.0.1:3000/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to create message', error);
      }
    });
      },

  readAllMessages: function(successCB, errorCB = null) {
    $.ajax({
      url: 'http://127.0.0.1:3000/classes/messages',
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  },

  createUser: function(message, successCB, errorCB = null) {
    $.ajax({
      url: 'http://127.0.0.1:3000/classes/users',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to create message', error);
      }
    });
      },

  readAllUsers: function(successCB, errorCB = null) {
    $.ajax({
      url: 'http://127.0.0.1:3000/classes/users',
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};