var to = "fenix_63@mail.ru";  
         var subj = "тема письма";  
         var text = "собственно тело письма";  
 
//SendMail(to, subj, text); 
 
 
function SendMail(sRecipientMail, sSubject, sMsgBody)   
{   
    try   
    {   
        // create a session and log on -- username and password in profile    
        var refMsg = WScript.CreateObject("CDO.Message");   
        var refConf = WScript.CreateObject("CDO.Configuration");   
           
        // Setting configuration params   
        with(refConf.Fields)   
        {   
            Item("http://schemas.microsoft.com/cdo/configuration/smtpserver") = "smtp.mail.ru";  
            Item("http://schemas.microsoft.com/cdo/configuration/sendusing") = 2; 
            Item("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = 1;  
            Item("http://schemas.microsoft.com/cdo/configuration/sendusername") = "fenix_63@mail.ru";  
            Item("http://schemas.microsoft.com/cdo/configuration/sendpassword") = "****"; 
        }   
        refConf.Fields.Update();   
   
        with(refMsg)   
        {   
            Configuration = refConf;   
            To       = sRecipientMail;   
            From     = "lou@list.ru";   
            Subject  = sSubject;   
            TextBody = sMsgBody;   
        }  
  
        
  
        refMsg.Send();   
    }    
    catch(e)   
    {   
        WScript.Echo("SendMail error !!! : " + e.description);   
        WScript.Quit(1);   
    }   
}
