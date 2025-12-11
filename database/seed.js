// import {faker} from '@faker-js/faker'
import {createClient} from '@supabase/supabase-js'
// import {fakerFR_BE as faker} from '@faker-js/faker'
// import {fakerEN_US as faker} from '@faker-js/faker'

// const personName = faker.person.fullName()
// const personBio = faker.person.bio()

// console.log('hi! my name is ', personName , '. I am a ', personBio)

 const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SERVICE_ROLE_KEY,
)

console.log(supabase)
