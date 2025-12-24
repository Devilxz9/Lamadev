import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs"

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
    CredentialsProvider({
      id:"credentials",
      name:"credentials",
      async authorize(credentials){
        await connect()
        try{
          const user = await User.findOne({email: credentials.email})

          if(user){
            // check password
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

            if(isPasswordCorrect){
              return user
            }else {
              throw new Error("Wrong Credentials")
            }

          }else{
            throw new Error("user not found")
          }

        }catch(err){
          throw new Error(err.message)
        }
      }
    })
  ],
  pages:{
    error:"/dashboard/login"
  }
  })

  export {handler as GET, handler as POST};
