import { supabase } from "@/lib/supabaseClient";
import type { QueryData } from "@supabase/supabase-js";

export const tasksWithProjectsQuery = supabase.from('tasks').select(`
  *,
  projects (
    id,
    name,
    slug
  )
`)
export type TasksWithProjects = QueryData<typeof tasksWithProjectsQuery>

export const projectsQuery = supabase.from('projects').select()
export type Projects = QueryData<typeof projectsQuery>

// query the 'projects' table, use select to select properties
// we need to pass the slug dynamically whenever we trigger the query by making the constant a function
export const projectQuery = (slug: string) =>  supabase.from('projects').select(`
  *,
  tasks (
    id,
    name,
    status,
    due_date
  )
`)
.eq('slug', slug)
.single()
// give data for only the row that has 'slug' value equals the second argument(some-slug)

//  get only the project that corresponds with page that the user is visiting
//  eq: get a specific row from a table

//  we get only the function type with this
// export type Project = QueryData<typeof projectQuery>
// we want whatever this function returns which is the query statement
export type Project = QueryData<ReturnType<typeof projectQuery>>
