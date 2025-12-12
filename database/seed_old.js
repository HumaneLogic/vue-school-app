// import {faker} from '@faker-js/faker'
import { faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'
// import {fakerFR_BE as faker} from '@faker-js/faker'
// import {fakerEN_US as faker} from '@faker-js/faker'

// const personName = faker.person.fullName()
// const personBio = faker.person.bio()

// console.log('hi! my name is ', personName , '. I am a ', personBio)

 const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SERVICE_ROLE_KEY,
)

// console.log(supabase)

const seedProjects = async (numEntries) => {

  const projects = []

  for (let i = 0; i < numEntries; i++) {
    const name = faker.lorem.words(3)

    projects.push({
      name: name,
      slug: name.toLocaleLowerCase().replace(/ /g, '-'),
      status: faker.helpers.arrayElement(['in-progress','completed']),
      collaborators: faker.helpers.arrayElements(['1,2,3'])
    })
  }
  // call supabase query api once to insert data
  await supabase.from('projects').insert(projects)
}

await seedProjects(10)
