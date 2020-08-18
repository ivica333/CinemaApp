import axios from "axios";

export default {

async loginUser(userInfo) {
    try {
      const data = await axios.post(`https://zm-job-application.herokuapp.com/auth/local`,userInfo)
      return data
    } catch (err) {
        return err
         }
    },
  
    async getMovies(token) {
        try {
          const data = await axios.get(`https://zm-job-application.herokuapp.com/movies`,
          { headers: {"Authorization" : `Bearer ${token}`} })
          return data
        } catch (err) {
            return err
             }
        },

        async createMovie(token,movieData) {
          try {
            const data = await axios.post(`https://zm-job-application.herokuapp.com/movies`,
             movieData,
            { headers: {"Authorization" : `Bearer ${token}`} }
            )
            return data
          } catch (err) {
              return err
               }
          },

          async deleteMovie(token,id) {
            try {
              const data = await axios.delete(`https://zm-job-application.herokuapp.com/movies/${id}`,
              { headers: {"Authorization" : `Bearer ${token}`} }
              )
              return data
            } catch (err) {
                return err
                 }
            },

            async updateMovie(token,id,movieData) {
              try {
                const data = await axios.put(`https://zm-job-application.herokuapp.com/movies/${id}`,
                movieData,  
                { headers: {"Authorization" : `Bearer ${token}`} }
                )
                return data
              } catch (err) {
                  return err
                   }
              }
        
}
