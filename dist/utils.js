

            function deleteThisAction(member,card,action){
                $("#bt_member_"+member+"_card_"+card+"_action_"+action).parent().replaceWith(function() { return null; });
            }

            function deleteThisChecklist (member,card,checklist){
                $("#bt_member_"+member+"_card_"+card+"_checklist_"+checklist).parent().replaceWith(function() { return null; });
                $("#hr_member_"+member+"_card_"+card+"_checklist_"+checklist).replaceWith(function() { return null; });
            }

            function deleteThisAttachments (member,card){
                $("#attachments_member_"+member+"_card_"+card+"_attachments").replaceWith(function() { return null; });
                $("#hr_attachment_member_"+member+"_card_"+card+"_attachments").replaceWith(function() { return null; });
            }

             function deleteThisAttachment (member,card,attachment){
                $("#attachment_member_"+member+"_card_"+card+"_attachment_"+attachment).replaceWith(function() { return null; });
           
            }
            
            function deleteThisChecklistItem(member,card,checklist,item){
                $("#checklist_item_member_"+member+"_card_"+card+"_checklist_"+checklist+"_item_"+item).parent().replaceWith(function() { return null; });
            }

            function deleteThisCard(member,card){
                $("#atv_member_"+member+"_card_"+card).parent().parent().replaceWith(function() { return null; });
            }
            
            function deleteThisDescription(member,card){
                $("#description_member_"+member+"_card_"+card).parent().replaceWith(function() { return null; });
            }
