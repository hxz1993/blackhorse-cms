import moment from "moment"
export default function dateformat(value,pattern){
   return moment(value).format(pattern);
}