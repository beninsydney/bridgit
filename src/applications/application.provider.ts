import { Application } from './application.entity'

export const applicationsProviders = [
  {
    provide: 'APPLICATIONS_REPOSITORY',
    useValue: Application
  }
]
