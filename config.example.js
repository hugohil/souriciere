exports.config = function(){
  return {
    port: 1337,
    contentDir: 'app',
    namespaces: {
      in: '/inputs',
      out: '/output'
    }
  }
}