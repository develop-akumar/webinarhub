export interface LiveWebinar{
    id:number,
    imagePath:string,
    credits:number,
    creditsExpiry : Date,
    title:string,
    organisation : string,
    orgLogoPath : string,
    highlights:string,
    category : string,
    liveDate:Date,
    followers : number,
    type?:string,
    status : string

}