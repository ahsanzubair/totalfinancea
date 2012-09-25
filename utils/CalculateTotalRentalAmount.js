Ext.define('MyApp.util.CalculateTotalRentalAmount', {
    config: {
        name: null
    },
 
    constructor: function(config) {
        this.initConfig(config);
    },
 
    calcPmtWithLastRegularPayment: function(APR, PA, T, PV, FV, IND,balloonAmount, paymentFrequencyIndicator,balloonMethodIndicator) {
               var i=this.calcI(APR, PA);
				var N=0;
				if (IND === 'P')
				{
					N=this.calcN(T, PA);
				}
				else
				{
					N=(T / 12) * PA;
				}
				var Pmt;
				if (i === 0)
				{
					if (paymentFrequencyIndicator === "M")
					{
						Pmt=(PV - FV) / T;
					}
					else if (paymentFrequencyIndicator === "F")
					{
						Pmt=(PV - FV) / (T / 12 * 26);
					}
					else if (paymentFrequencyIndicator === "W")
					{
						Pmt=(PV - FV) / (T / 12 * 52);
					}else if(paymentFrequencyIndicator === "Q")
					{
						Pmt = (PV - FV)/(T/12*4);
					}else if(paymentFrequencyIndicator === "H")
					{
						Pmt = (PV - FV)/(T/12*2);
					}else if(paymentFrequencyIndicator === "Y")
					{
						Pmt = (PV - FV)/(T/12*1);
					}
				}
				else
				{
					if (balloonAmount !== 0)
					{
						if (balloonMethodIndicator === 'W')
						{
							Pmt=(PV - (FV * (Math.pow((1 + (i / 100)), (-N))))) / ((1 - (Math.pow((1 + (i / 100)), (-N)))) / (i / 100));
								console.log("with payment use")
						}
						else if (balloonMethodIndicator === 'A')
						{
							Pmt=(PV - (FV * (Math.pow((1 + (i / 100)), (-N))))) / ((1 - (Math.pow((1 + (i / 100)), -(N - 1)))) / (i / 100));
								console.log("after payment used ");
						}
						else
						{
							Pmt=(PV - (FV * (Math.pow((1 + (i / 100)), (-N))))) / ((1 - (Math.pow((1 + (i / 100)), (-N)))) / (i / 100));
                              console.log("default used payment used");
						}
					}
					else
					{
						Pmt=(PV - (FV * (Math.pow((1 + (i / 100)), (-N))))) / ((1 - (Math.pow((1 + (i / 100)), (-N)))) / (i / 100));
					}
				}
			
			return Pmt;
    },
	
	calcPmtInAdvNoFirstRental: function(APR, PA, T, PV, FV, IND,paymentFrequencyIndicator) {
               var i=this.calcI(APR, PA);
				var N=0;
				if (IND === 'P')
				{
					N=this.calcN(T, PA);
				}
				else
				{
					N=(T / 12) * PA;
				}
				var Pmt;
				if (i === 0)
				{
					if (paymentFrequencyIndicator === "M")
					{
						Pmt=(PV - FV) / T;
					}
					else if (paymentFrequencyIndicator === "F")
					{
						Pmt=(PV - FV) / (T / 12 * 26);
					}
					else if (paymentFrequencyIndicator === "W")
					{
						Pmt=(PV - FV) / (T / 12 * 52);
					}else if(paymentFrequencyIndicator === "Q")
					{
						Pmt = (PV - FV)/(T/12*4);
					}else if(paymentFrequencyIndicator === "H")
					{
						Pmt = (PV - FV)/(T/12*2);
					}else if(paymentFrequencyIndicator === "Y")
					{
						Pmt = (PV - FV)/(T/12*1);
					}
				}
				else
				{
					Pmt=(PV - (FV * (Math.pow((1 + (i / 100)), (-N))))) / ((1 + (i / 100)) * (1 - (Math.pow((1 + (i / 100)), (-N)))) / (i / 100));
				}
			
			return Pmt;
    },
	
	calcN: function(T, Pa) {
        
		if(Ext.isNumber(T) && Ext.isNumber(Pa))
		{
		        var N=0;
				if (Pa === 12)
				{
					N=(T / 12) * Pa;
				}
				if (Pa === 26)
				{
					N=(T / 26) * Pa;
				}
				if (Pa === 52)
				{
					N=(T / 52) * Pa;
				}	
				if(Pa===1)
				{
					N = (T/1)*Pa;
				}
				if(Pa===2)
				{
					N = (T/2)*Pa;
				}
				if(Pa===4)
				{
					N = (T/4)*Pa;
				}
				
				return N;
		}
		else
		{
		   console.log("calcN Passed parameters are not numbers");
		}
    },
	
	calcI: function(APR, pa) {
       
		if(Ext.isNumber(APR) && Ext.isNumber(pa))
		{
            
           // Ext.Msg.alert("APR:"+ APR);
           // Ext.Msg.alert("pa:"+ pa);
            
		var i=0;
		var t=0;
				if (pa === 0)
				{
					i=0;
				}
				else
				{
					if (pa === 26)
					{
						t=365 / 14;
					}
					else
					{
						if(pa === 26) {
						   t=365/14;
						}
						else if(pa === 52) {
							t=365/7;
						}
						else if(pa === 12) {
							t=12;
						}
						else if(pa === 1) {
							t=365/365;
						}else if(pa === 2) {
							t=2;
						}
						else if(pa === 4) {
							t=4;
						}
					}
				}
				t=t * 100;
				   i=APR / t * 100;
				
				return i;
				
		}
        else
		{
		    console.log("calcI Passed parameters are not numbers");
		}		
    }
	
	
});