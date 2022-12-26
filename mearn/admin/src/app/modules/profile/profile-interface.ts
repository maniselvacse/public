export interface ProfileInterface {
  _id: string
  name: string
  my_self: string
  about_me: string
  about_my_profile: string
  email: string
  dob: string
  skills: string
  hobbies: string
  services: {
    name: string
    description: string
  }
  experience: {
    company_name: string
    designation: string
    location: string
    start_date: string
    end_date: string
  }
  education: {
    institution_name: string
    qualification: string
    location: string
    start_date: string
    end_date: string
  }
  social_media: {
    name: string
    url: string
  }
  skills_and_percentage: {
    name: string
    percentage: string
  }
  createdAt: string
  updatedAt: string
  attachments: {
    home_image: string
    about_image: string
    about_my_profile_image: string
    resume_document: string
  }
}