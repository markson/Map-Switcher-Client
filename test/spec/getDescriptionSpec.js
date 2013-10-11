describe("location description", function() {
	var json = {
  "From": "markson@me.com",
  "FromFull": {
    "Email": "markson@me.com",
    "Name": "Lin Zhu"
  },
  "To": "\"Postmark Inbound\" <0488857a2c5749b158dd1d92f94417f8@inbound.postmarkapp.com>",
  "ToFull": [
    {
      "Email": "0488857a2c5749b158dd1d92f94417f8@inbound.postmarkapp.com",
      "Name": "Postmark Inbound"
    }
  ],
  "Cc": "",
  "CcFull": [],
  "ReplyTo": "",
  "Subject": "Dropped Pin",
  "MessageID": "26ee3d7f-186e-4036-944b-d90609b56615",
  "Date": "Mon, 05 Aug 2013 21:58:50 +1200",
  "MailboxHash": "",
  "TextBody": "Dropped Pin\r\n\r\n\r\n\r\n\r\n\r\nSent from my iPhone",
  "HtmlBody": "<html><head><meta http-equiv=\"content-type\" content=\"text\/html; charset=us-ascii\"><\/head><body dir=\"auto\"><div><a href=\"http:\/\/maps.apple.com\/?lsp=7618&amp;sll=-43.525056,172.581068&amp;q=University%20Drive%2C%20Ilam%2C%20Christchurch%208041%2C%20New%20Zealand\">Dropped Pin<\/a><\/div><div><br><br><\/div><\/body><\/html>",
  "Tag": "",
  "Headers": [
    {
      "Name": "X-Spam-Checker-Version",
      "Value": "SpamAssassin 3.3.1 (2010-03-16) on ip-10-90-190-53"
    },
    {
      "Name": "X-Spam-Status",
      "Value": "No"
    },
    {
      "Name": "X-Spam-Score",
      "Value": "-0.8"
    },
    {
      "Name": "X-Spam-Tests",
      "Value": "HTML_MESSAGE,MIME_QP_LONG_LINE,MPART_ALT_DIFF_COUNT,RCVD_IN_DNSWL_MED,SPF_PASS"
    },
    {
      "Name": "Received-SPF",
      "Value": "Pass (sender SPF authorized) identity=mailfrom; client-ip=17.172.204.238; helo=st11p01mm-asmtp003.mac.com; envelope-from=markson@me.com; receiver=0488857a2c5749b158dd1d92f94417f8@inbound.postmarkapp.com"
    },
    {
      "Name": "X-Proofpoint-Virus-Version",
      "Value": "vendor=fsecure engine=2.50.10432:5.10.8794,1.0.431,0.0.0000 definitions=2013-08-05_02:2013-08-05,2013-08-05,1970-01-01 signatures=0"
    },
    {
      "Name": "X-Proofpoint-Spam-Details",
      "Value": "rule=notspam policy=default score=0 spamscore=0 ipscore=0 suspectscore=0 phishscore=0 bulkscore=0 adultscore=0 classifier=spam adjust=0 reason=mlx scancount=1 engine=6.0.2-1305010000 definitions=main-1308050045"
    },
    {
      "Name": "Content-transfer-encoding",
      "Value": "7bit"
    },
    {
      "Name": "Message-id",
      "Value": "<72874C3E-89A3-40DE-8739-3C1124208E46@me.com>"
    },
    {
      "Name": "MIME-version",
      "Value": "1.0 (1.0)"
    },
    {
      "Name": "X-Mailer",
      "Value": "iPhone Mail (11A4435d)"
    }
  ],
  "Attachments": [
    {
      "Name": "Dropped Pin.loc.vcf",
      "ContentType": "text/directory",
      "ContentLength": 388,
      "ContentID": ""
    }
  ]
};
	it("should use the format of", function() {
		var description = getDescription(json);
		expect(description).toEqual("3 days ago Dropped pin's location : University Drive, Ilam, Christchurch 8041, New Zealand "); 
	});
})
