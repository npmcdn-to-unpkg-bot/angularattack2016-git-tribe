import {User} from './user';
export class Repo {
  id: number;
  full_name: string;
  name: string;
  owner:User;
  private : boolean;
  html_url :  string;
  description :  string;
  fork : boolean;
  url :  string;
  deployments_url :  string;
  created_at :  Date;
  updated_at :  Date;
  pushed_at :  Date;
  git_url :  string;
  ssh_url :  string;
  clone_url :  string;
  svn_url :  string;
  homepage : string;
  size : number;
  stargazers_count : number;
  watchers_count : number;
  language : string;
  has_issues : boolean;
  has_downloads : boolean;
  has_wiki : boolean;
  has_pages : boolean;
  forks_count : number;
  open_issues_count : number;
  forks : number;
  open_issues : number;
  watchers : number;
  default_branch :  string ;
}