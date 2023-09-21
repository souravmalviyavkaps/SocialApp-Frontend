import axios from 'axios'

export const registerUserApi = async (body: any) => {
  try {
    const { fname, lname, email, gender, country, password, confirmPassword } =
      body
    const payload = {
      name: fname + ' ' + lname,
      email,
      gender,
      country,
      password,
      confirmPassword,
    }
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URI}/users/new`,
      payload
    )
    if (res.status === 201) {
      return {
        success: true,
        message: res.data.message,
        user: res.data.newUser,
      }
    } else {
      throw new Error(res.data.message)
    }
  } catch (error: any) {
    console.log('Error while registering user :', error)
    if (error.response) {
      return {
        success: false,
        message: error.response.data.message,
      }
    } else {
      return {
        success: false,
        message: 'Something went wrong',
      }
    }
  }
}

export const loginUserApi = async (body: object) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URI}/auth/login`,
      body
    )
    console.log('Login response : ', res)
    if (res.status === 200) {
      return {
        success: true,
        message: 'Logged in successfully',
        access_token: res.data.access_token,
      }
    } else {
      throw new Error(res.data.message)
    }
  } catch (error: any) {
    console.log('Error while login :', error)

    if (error.response) {
      return {
        success: false,
        message: error.response.data.message,
      }
    } else {
      return {
        success: false,
        message: 'Something went wrong',
      }
    }
  }
}
