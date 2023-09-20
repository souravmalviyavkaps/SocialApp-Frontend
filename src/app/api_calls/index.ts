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
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      body
    )
    console.log(res)
  } catch (error: any) {
    console.log('Error while login user', error)
    return {
      success: false,
      message: error.message,
    }
  }
}
