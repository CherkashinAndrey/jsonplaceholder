
(function() {

  angular
    .module('app')
    .service('appServices', appServices)
    .constant('URL', 'http://jsonplaceholder.typicode.com/');

  function appServices($http, URL) {
    return {
      getUsers: function(id) {
        return $http({
          method: 'GET',
          url: URL + 'users',
          params: {
            id: id
          }
        }).then(
          function (result) {
            return result;
          },
          function (error) {
            console.log(error);
          }
        );
      },

      getPosts: function(config) {
        return $http({
          method: 'GET',
          url: URL + 'posts',
          params: config
        })
        .then(
          function (result) {
            return result;
          },
          function (error) {
            console.log(error);
          }
        )
      },

      getComments: function(id) {
        return $http({
          method: 'GET',
          url: URL + 'comments',
          params: {
            postId: id
          }
        }).then(
          function (result) {
            return result;
          },
          function (error) {
            console.log(error);
          }
        )
      },

      // getPosts: function(id) {
      //   var that = this;
      //   var res;
      //   return $http({
      //     method: 'GET',
      //     url: URL + 'posts',
      //     params: {
      //       userId: id
      //     }
      //   })
      //   .then(
      //     function (result) {
      //       res = result;
      //        console.log('getPost', result)
      //       return result;
      //     },
      //     function (error) {
      //       console.log(error);
      //     }
      //   ).then(
      //       function (result) {
      //         return that.getUsers(id).then(
      //           function (result) {
      //             res['userName'] = result.data[0].name;
      //             return res;
      //           },
      //           function (error) {
      //             console.log(error);
      //           }
      //       );
      //     },
      //     function (error) {
      //       console.log(error);
      //     }
      //   )
      // },

      // getComments: function(id) {
      //   var that = this;
      //   var res;
      //   console.log("getCommentsID", id );
      //   return $http({
      //     method: 'GET',
      //     url: URL + 'comments',
      //     params: {
      //       postId: id
      //     }
      //   }).then(
      //     function (result) {
      //       res = result;
      //       console.log('getComments', result)
      //       return result;
      //     },
      //     function (error) {
      //       console.log(error);
      //     }
      //   ).then(
      //       function (result) {
      //       return that.getPosts(id).then(
      //         function (result) {
      //           console.log('!!!!',result);
                
      //           res['postTitle'] = result.data[0].title;
      //           res['postBoby'] = result.data[0].title;
      //           return res;
      //         },
      //         function (error) {
      //           console.log(error);
      //         }
      //       )
      //     },
      //     function (error) {
      //       console.log(error);
      //     }
      //   )
      //   // .then(
      //   //     function (result) {
      //   //     return that.getPosts(id).then(
      //   //       function (result) {
      //   //         res['postTitle'] = result.data[0].title;
      //   //         return res;
      //   //       },
      //   //       function (error) {
      //   //         console.log(error);
      //   //       }
      //   //     );
      //   //   },
      //   //   function (error) {
      //   //     console.log(error);
      //   //   }
      //   // );
      // },


      getAlbums: function(id) {
        console.log("getAlbums", id );
        return $http({
          method: 'GET',
          url: URL + 'albums',
          params: {
            userId: id
          }
        }).then(
          function (result) {
            console.log('getAlbums', result)
            return result;
          },
          function (error) {
            console.log(error);
          }
        );
      },

      getPhotos: function(id) {
        console.log("getPhotos", id );
        return $http({
          method: 'GET',
          url: URL + 'photos',
          params: {
            albumId: id
          }
        }).then(
          function (result) {
            console.log('getPhotos', result)
            return result;
          },
          function (error) {
            console.log(error);
          }
        );
      },


    }
  }

})();
